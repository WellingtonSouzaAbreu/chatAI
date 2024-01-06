const GOOGLE_CLOUD_ACCESS_TOKEN = process.env.REACT_APP_GOOGLE_CLOUD_ACCESS_TOKEN

const googleCloudRequestHeader = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${GOOGLE_CLOUD_ACCESS_TOKEN}`,
    }
}

export { googleCloudRequestHeader }