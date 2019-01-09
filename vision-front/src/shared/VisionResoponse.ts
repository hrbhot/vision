export class VisionResoponse {
  public mid: String
  public description: String
  public score: number
  public bounding_poly: Vertices[]
  public locations: Location
}

export class Vertices {
  public x: number
  public y: number
}

export class Location {
  public lat_lng: Coordinate
}

export class Coordinate {
  public latitude: number
  public ongitude: number
}
