export interface Result {
created_date:string
multimedia:any;
uri: string;
url: string;
  id: string;
  asset_id: number;
  source: string;
  kicker: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: Array<string>;
  org_facet: Array<string>;
  per_facet: Array<string>;
  geo_facet: Array<string>;
  media: Array<{
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    media_metadata: Array<{
      url: string;
      format: string;
      height: number;
      width: number;
    }>;
  }>;
  eta_id: number;
}

