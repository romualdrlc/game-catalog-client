export default class Platform {

  private name: string;
  private slug: string;
  private url: string;
  private platform_logo_url: string;

  constructor(name: string, slug: string, url: string, platform_logo_url: string) {
    this.name = name;
    this.slug = slug;
    this.url = url;
    this.platform_logo_url = platform_logo_url;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getSlug(): string {
    return this.slug;
  }

  setSlug(value: string) {
    this.slug = value;
  }

  getUrl(): string {
    return this.url;
  }

  setUrl(value: string) {
    this.url = value;
  }

  getPlatformLogoUrl(): string {
    return this.platform_logo_url;
  }

  setPlatformLogoUrl(value: string) {
    this.platform_logo_url = value;
  }
}
