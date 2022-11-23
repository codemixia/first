const failCallback = async (xhr: XMLHttpRequest) => {
    const response = xhr.response || {};
    const code = response.status || 999;
    switch (code) {
        default: {
            break;
        }
    }
};
export default failCallback;
