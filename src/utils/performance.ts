// =============================================================================
// PERFORMANCE MONITORING UTILITIES
// =============================================================================

// 성능 측정 유틸리티
export class PerformanceMonitor {
    private static instance: PerformanceMonitor;
    private metrics: Map<string, number> = new Map();

    static getInstance(): PerformanceMonitor {
        if (!PerformanceMonitor.instance) {
            PerformanceMonitor.instance = new PerformanceMonitor();
        }
        return PerformanceMonitor.instance;
    }

    // 시작 시간 기록
    startTimer(key: string): void {
        this.metrics.set(key, performance.now());
    }

    // 종료 시간 기록 및 소요시간 반환
    endTimer(key: string): number {
        const startTime = this.metrics.get(key);
        if (startTime === undefined) {
            console.warn(`Timer "${key}" not found`);
            return 0;
        }
        
        const duration = performance.now() - startTime;
        this.metrics.delete(key);
        return duration;
    }

    // 메모리 사용량 측정
    getMemoryUsage(): any | null {
        if ('memory' in performance) {
            return (performance as any).memory;
        }
        return null;
    }

    // 렌더링 성능 측정
    measureRender(componentName: string, renderFn: () => void): number {
        const key = `render-${componentName}`;
        this.startTimer(key);
        renderFn();
        const duration = this.endTimer(key);
        
        if (duration > 16) { // 60fps 기준
            console.warn(`Slow render detected in ${componentName}: ${duration.toFixed(2)}ms`);
        }
        
        return duration;
    }

    // Web Vitals 측정
    observeWebVitals(): void {
        // First Contentful Paint
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
                        console.log(`FCP: ${entry.startTime.toFixed(2)}ms`);
                    }
                }
            });
            
            try {
                observer.observe({ entryTypes: ['paint'] });
            } catch (e) {
                console.warn('Performance Observer not supported');
            }
        }
    }
}

// 디바운스 유틸리티 (재사용 가능)
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: number;
    
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

// 스로틀 유틸리티
export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// 지연 로딩 유틸리티
export const createLazyLoader = <T>(loader: () => Promise<T>) => {
    let cached: T | null = null;
    let loading: Promise<T> | null = null;

    return async (): Promise<T> => {
        if (cached) return cached;
        if (loading) return loading;

        loading = loader();
        cached = await loading;
        loading = null;
        
        return cached;
    };
};

// 메모리 정리 유틸리티
export const createMemoryManager = () => {
    const refs = new Set<{ cleanup: () => void }>();

    return {
        register: (cleanup: () => void) => {
            const ref = { cleanup };
            refs.add(ref);
            return () => refs.delete(ref);
        },
        
        cleanup: () => {
            refs.forEach(ref => ref.cleanup());
            refs.clear();
        }
    };
};

// 성능 모니터 인스턴스 생성
export const performanceMonitor = PerformanceMonitor.getInstance();

// 개발 환경에서만 성능 로깅
if (typeof window !== 'undefined' && import.meta.env.DEV) {
    performanceMonitor.observeWebVitals();
    
    // 5초마다 메모리 사용량 로깅
    setInterval(() => {
        const memory = performanceMonitor.getMemoryUsage();
        if (memory) {
            console.log('Memory Usage:', {
                used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
                total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
                limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`
            });
        }
    }, 5000);
}