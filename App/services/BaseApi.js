import axios from 'axios'
import ServerConfig from '../config/ServerConfig'

const baseAxios = () => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'app-id': ServerConfig.SAMPLE_APP_ID,
    }

    const axiosInstance = axios.create({
        baseURL: ServerConfig.BASE_URL,
        headers: defaultHeaders,
    })

    //Interceptors
    axiosInstance.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            return Promise.reject(error)
        },
    )

    axiosInstance.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            return Promise.reject(error)
        },
    )

    return axiosInstance
}

const executeRequest = (method, pathName, data) => {
    const body = method == 'get' || !data ? {} : { data }
    const request = { method: method, url: pathName, ...body }

    console.log(request.url)

    const axiosInstance = baseAxios()
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosInstance.request(request)
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    get(pathname) {
        return executeRequest('get', pathname, null)
    },

    post(pathname, data) {
        return executeRequest('post', pathname, data)
    },

    all(promises) {
        return axios.all(promises)
    },
}
