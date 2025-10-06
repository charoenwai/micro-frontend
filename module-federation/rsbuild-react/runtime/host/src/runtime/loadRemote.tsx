import { ComponentType, lazy } from "react";
import { mf } from './mfInstance';

export const getRemote = async (remoteName: string, moduleName: string) => lazy(async () => {
  try {
    const module = await mf.loadRemote(`${remoteName}/${moduleName}`);
    if (!module) {
      console.warn(`Remote component ${remoteName}/${moduleName} not found, using fallback`);
      return {
        default: () => <div>Module component unavailable</div>
      };
    }
    return module as { default: ComponentType<any> };
  } catch (error) {
    console.error(`Failed to load ${remoteName}/${moduleName}:`, error);
    return {
      default: () => <div>Error loading Module component</div>
    };
  }
});