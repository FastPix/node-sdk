import { ClientSDK } from "../lib/sdks.js";
import { Dimensions } from "./dimensions.js";
import { DRMConfigurations } from "./drmconfigurations.js";
import { Errors } from "./errors.js";
import { InputVideo } from "./inputvideo.js";
import { InVideoAIFeatures } from "./invideoaifeatures.js";
import { LivePlayback } from "./liveplayback.js";
import { ManageLiveStream } from "./managelivestream.js";
import { ManageVideos } from "./managevideos.js";
import { Metrics } from "./metrics.js";
import { Playback } from "./playback.js";
import { Playlist } from "./playlist.js";
import { SigningKeys } from "./signingkeys.js";
import { SimulcastStream } from "./simulcaststream.js";
import { StartLiveStream } from "./startlivestream.js";
import { Views } from "./views.js";

export class Fastpix extends ClientSDK {
  private _inputVideo?: InputVideo;
  get inputVideo(): InputVideo {
    return (this._inputVideo ??= new InputVideo(this._options));
  }

  private _manageVideos?: ManageVideos;
  get manageVideos(): ManageVideos {
    return (this._manageVideos ??= new ManageVideos(this._options));
  }

  private _inVideoAIFeatures?: InVideoAIFeatures;
  get inVideoAIFeatures(): InVideoAIFeatures {
    return (this._inVideoAIFeatures ??= new InVideoAIFeatures(this._options));
  }

  private _playback?: Playback;
  get playback(): Playback {
    return (this._playback ??= new Playback(this._options));
  }

  private _playlist?: Playlist;
  get playlist(): Playlist {
    return (this._playlist ??= new Playlist(this._options));
  }

  private _drmConfigurations?: DRMConfigurations;
  get drmConfigurations(): DRMConfigurations {
    return (this._drmConfigurations ??= new DRMConfigurations(this._options));
  }

  private _startLiveStream?: StartLiveStream;
  get startLiveStream(): StartLiveStream {
    return (this._startLiveStream ??= new StartLiveStream(this._options));
  }

  private _manageLiveStream?: ManageLiveStream;
  get manageLiveStream(): ManageLiveStream {
    return (this._manageLiveStream ??= new ManageLiveStream(this._options));
  }

  private _livePlayback?: LivePlayback;
  get livePlayback(): LivePlayback {
    return (this._livePlayback ??= new LivePlayback(this._options));
  }

  private _simulcastStream?: SimulcastStream;
  get simulcastStream(): SimulcastStream {
    return (this._simulcastStream ??= new SimulcastStream(this._options));
  }

  private _signingKeys?: SigningKeys;
  get signingKeys(): SigningKeys {
    return (this._signingKeys ??= new SigningKeys(this._options));
  }

  private _views?: Views;
  get views(): Views {
    return (this._views ??= new Views(this._options));
  }

  private _dimensions?: Dimensions;
  get dimensions(): Dimensions {
    return (this._dimensions ??= new Dimensions(this._options));
  }

  private _metrics?: Metrics;
  get metrics(): Metrics {
    return (this._metrics ??= new Metrics(this._options));
  }

  private _errors?: Errors;
  get errors(): Errors {
    return (this._errors ??= new Errors(this._options));
  }
}
