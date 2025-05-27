
    export type RemoteKeys = 'remote1/App';
    type PackageType<T> = T extends 'remote1/App' ? typeof import('remote1/App') :any;