import { useQuery, gql } from '@apollo/client';

const ALBUMS = gql`
  query {
    albums {
        id
        name
        artist
        img
    }
}
`;

export interface GraphqlResponse {
    loading: boolean;
    error: any;
    albums: Album[]
}

export interface Album {
    id: string;
    name: string;
    artist: string;
    img: string;
}

export default function useAlbum(): GraphqlResponse {
    const { loading, error, data } = useQuery(ALBUMS)
    return {
        loading,
        error,
        albums: data ? data.albums : null
    }
}