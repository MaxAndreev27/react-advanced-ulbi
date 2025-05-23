import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        // if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
