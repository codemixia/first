export {};

declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.svg';
declare module '*.ico';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: void;
    }
}
