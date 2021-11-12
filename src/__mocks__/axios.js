const mockedResult = {
    data: {
        results: {
            rows: [],
            columns: []
        }
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockedResult)
}