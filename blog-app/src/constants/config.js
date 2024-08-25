export const API_NOTIFICATIONS_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, Please wait'
    },
    success: {
        title: 'Success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching from the server. Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server. Please check internet and try again'
    }
}

export const SERVICE_URLS = {
    userSignup: {url: '/signup', method: 'POST' },
    userLogin: {url: '/login', method: 'POST' }
}