import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

// type SpringType = typeof import('@react-spring/web');
type SpringType = typeof import('react-spring-web-modified');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType | null;
    Spring?: SpringType | null;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга
const getAsyncAnimationModules = async () => {
    // return Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
    return Promise.all([import('react-spring-web-modified'), import('@use-gesture/react')]);
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType | null>(null);
    const GestureRef = useRef<GestureType | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
