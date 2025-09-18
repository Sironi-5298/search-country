import 'leaflet/dist/leaflet.css'
import type { Map as LeafletMap } from 'leaflet'
import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import type { PackageCountry } from '../api/types/PackageCountry'

interface MapProps {
    place: PackageCountry
}

export default function Map({ place }: MapProps) {
    const mapRef = useRef<LeafletMap | null>(null)

    useEffect(() => {
        if (mapRef.current && place) {
            mapRef.current.flyTo([place.latlng[0], place.latlng[1]])
        }
    }, [place])

    return <MapContainer
        ref={mapRef}
        center={[place.latlng[0], place.latlng[1]]}
        zoom={8}
        scrollWheelZoom
        className='h-full w-full'
    >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {place && <Marker position={[place.latlng[0], place.latlng[1]]} />}
    </MapContainer>
}