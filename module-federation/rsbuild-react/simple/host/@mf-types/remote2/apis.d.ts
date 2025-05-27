
    export type RemoteKeys = 'remote2/App';
    type PackageType<T> = T extends 'remote2/App' ? typeof import('remote2/App') :any;