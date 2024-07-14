// types.d.ts
declare module "*.jpeg" {
    const value: StaticImageData;
    export default value;
  }
  
  declare module "*.png" {
    const value: StaticImageData;
    export default value;
  }
  
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
  }
  