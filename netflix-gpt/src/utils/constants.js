export const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
  }
};

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w780"

export const BG_IMG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"

export const OPENAPI_KEY=process.env.REACT_APP_OPENAPI_KEY



