import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {LevelInterface} from "../interfaces/level-interface";
import {LightInterface} from "../interfaces/light-interface";
import {TextureInterface} from "../interfaces/texture-interface";
import {MusicInterface} from "../interfaces/music-interface";
import {SkyboxInterface} from "../interfaces/skybox-interface";
import {MeshInterface} from "../interfaces/mesh-interface";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  public getLevel(): Observable<LevelInterface[]>
  {
    return this.http.get<LevelInterface[]>(this.url + 'level');
  }
  public getLight(id: number): Observable<LightInterface>
  {
    return this.http.get<LightInterface>(this.url + 'light/' + id);
  }
  public updateLight(light: LightInterface)
  {
    const body = {
      red: light.red,
      green: light.green,
      blue: light.blue,
      alpha: light.alpha,
    }
    return this.http.put<LightInterface>(this.url + 'light/' + light.id, body);
  }
  public uploadFile(type: string, id: number, file: File, filename: string)
  {
    let baseUrl = type.toLowerCase();
    console.log(type)
    if (type == 'Musique')
      baseUrl = 'music';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);
    return this.http.put(this.url + baseUrl + '/' + id, formData);
  }
  public getTexture(id: number): Observable<TextureInterface>
  {
    return this.http.get<TextureInterface>(this.url + 'texture/' + id);
  }
  public getMusic(id: number): Observable<MusicInterface>
  {
    return this.http.get<MusicInterface>(this.url + 'music/' + id);
  }
  public getSkybox(id: number): Observable<SkyboxInterface>
  {
    return this.http.get<SkyboxInterface>(this.url + 'skybox/' + id);
  }
  public getMesh(id: number): Observable<MeshInterface>
  {
    return this.http.get<MeshInterface>(this.url + 'mesh/' + id);
  }
}
