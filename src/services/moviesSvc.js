import * as json from './jsonSvc'

export const getMovies = async (currPage) => {
    return json[`json${currPage + 1}`]
}