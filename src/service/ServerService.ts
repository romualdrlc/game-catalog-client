import {AxiosRequestConfig, AxiosResponse} from "axios";
import {api} from "boot/axios";
import Game from "src/entity/Game";
import Platform from "src/entity/Platform";

export default class ServerService {

  public async getGameList(): Promise<Game[]> {
    const gameList: Game[] = [];
    const response = await this.get<Game[]>('games');

    for (const data of response) {
      const platform: Platform = new Platform(
        data['platform']['name'],
        data['platform']['slug'],
        data['platform']['url'],
        data['platform']['platform_logo_url']
      );
      gameList.push(new Game(
        data['id'],
        data['code'],
        data['name'],
        data['slug'],
        data['summary'],
        data['release_date'],
        data['price'],
        platform,
        data['cover_url'],
      ));
    }
    return gameList;
  }

  public async getGameBySlug(slug: string): Promise<Game> {
    const response = await this.get<Game>('games/' + slug);
    const platform: Platform = new Platform(
      response['platform']['name'],
      response['platform']['slug'],
      response['platform']['url'],
      response['platform']['platform_logo_url']
    );
    return new Game(
      response['id'],
      response['code'],
      response['name'],
      response['slug'],
      response['summary'],
      response['release_date'],
      response['price'],
      platform,
      response['cover_url'],
    );
  }

  public async getPlatformList(): Promise<Platform[]> {
    const platformList: Platform[] = [];
    const response: { name: string; slug: string, url: string, platform_logo_url: string }[] = await this.get('platforms');
    for (const data of response) {
      platformList.push(new Platform(
        data.name,
        data.slug,
        data.url,
        data.platform_logo_url
      ));
    }
    return platformList;
  }

  public async getGameListByPlatform(slug: string): Promise<Game[]> {
    const gameList: Game[] = [];
    const response = await this.get<Game[]>(`platform/${slug}`);
    for (const data of response) {
      const platform: Platform = new Platform(
        data['platform']['name'],
        data['platform']['slug'],
        data['platform']['url'],
        data['platform']['platform_logo_url']
      );
      gameList.push(new Game(
        data['id'],
        data['code'],
        data['name'],
        data['slug'],
        data['summary'],
        data['release_date'],
        data['price'],
        platform,
        data['cover_url'],
      ));
    }
    return gameList;
  }

  private async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await api.get(url, config);
    return response.data;
  }

  private async post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await api.post(url, data, config);
    return response.data;
  }
}
