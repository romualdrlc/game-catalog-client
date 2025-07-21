import Platform from "src/entity/Platform";

export default class Game {

  private id: number;
  private code: number;
  private name: string;
  private slug: string;
  private summary: string;
  private release_date: Date;
  private price: number;
  private platform: Platform;
  private cover_url: string;

  constructor(
    id: number,
    code: number,
    name: string,
    slug: string,
    summary: string,
    release_date: Date,
    price: number,
    platform: Platform,
    cover_url: string
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.slug = slug;
    this.summary = summary;
    this.release_date = release_date;
    this.price = price;
    this.platform = platform;
    this.cover_url = cover_url;
  }


  getId(): number {
    return this.id;
  }

  getCode(): number {
    return this.code;
  }

  setCode(value: number) {
    this.code = value;
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

  getSummary(): string {
    return this.summary;
  }

  setSummary(value: string) {
    this.summary = value;
  }

  getReleaseDate(): Date {
    return this.release_date;
  }

  setReleaseDate(value: Date) {
    this.release_date = value;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number) {
    this.price = value;
  }

  getPlatform(): Platform {
    return this.platform;
  }

  setPlatform(value: Platform) {
    this.platform = value;
  }

  getCoverUrl(): string {
    return this.cover_url;
  }

  setCoverUrl(value: string) {
    this.cover_url = value;
  }
}
