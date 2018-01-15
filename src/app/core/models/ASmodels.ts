  export interface BASICITEM {
    _id?: string;
    name?: string;
    description: string;
    createdAt?: Date;
    category?: Array<string>;
    relatedItems?: Array<string>;
    published?: boolean;
    // type?:['Android', 'ios', 'windows', 'blackberryOS', 'others'];
    status?: string;
    featured?: boolean;
    totalSold?: number;
    availableStock?: number;
    pictures?: Array<IMAGEOBJ>;
    reviews?: Array<REVIEWOBJ>;
    recommendForYou?: Array<string>;
    price?: {
      original: number;
      discounted?: number;
      validity: number;
    };
    deliverCompany?: {
      _id: string,
      abroad: boolean;
      charges: number;
      duration: Date;
      availiblity: Array<string>;
    };
    dealerInfo: {
      _id: string;
      name: string;
      followedBy?: Array<string>;
    };
    specifications: {
      model?: string;
      year?: number;
      uniqueId?: string;
      dealar?: string;
      origin?: string;
      warranty?: Date;
    };
  }
  export interface CAMERAOBJ {
    videoCaptureResolution: number;
    autofocus: boolean;
    flash: {
        front: boolean;
        back?: boolean;
    };
    resolution: {
        front: number;
        back?: number;
    };
  }
  export interface DIMENSIONS {
      width: number;
      height: number;
  }
  export interface IMAGEOBJ {
    _id: string;
    url: string;
    caption: string;
  }
  export interface POWERMANAGMENT {
    talktime?: string;
    standbytime?: string;
    fastcharge?: boolean;
    volts?: number;
    Hp?: number;
    frequency: number;
  }
  export interface REVIEWOBJ {
    reviewerName: string;
    review: string;
    rating: {
      total: number;
      given: number;
    };
    createdAt: Date;
  }
  export interface SYSTEMSSPECS {
      processor?: string;
      storage?: number;
      memory?: number;
      extCard?: number;
      OS?: string;
      color?: string;
      network?: string;
      GPS?: string;
      displayResolution: string;
      viewingAngle: string;
      bluetooth: boolean;
      HDMI: boolean;
      hdType: string;
  }
