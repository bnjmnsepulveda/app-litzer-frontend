import { useQuery, gql } from '@apollo/client';

const ALBUM_BY_ID = gql`
    query($id: String!) {
        album: albumById(id: $id) {
            id
            name
            artist
            img
            songs {
                id
                name
                duration
            }
        }
    }
`;

export interface GraphqlResponse {
    loading: boolean;
    error: any;
    album: Album
}

export interface Song {
    id: string;
    name: string;
    duration: string;
}

export interface Album {
    id: string;
    name: string;
    artist: string;
    img: string;
    songs: Song[]
}

export default function useAlbum(id: string): GraphqlResponse {
    const { loading, error, data } = useQuery(ALBUM_BY_ID, {
        variables: {
            id: id
        }
    })
    return {
        loading,
        error,
        album: data ? data.album : null
    }
}