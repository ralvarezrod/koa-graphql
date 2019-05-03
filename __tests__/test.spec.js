const add = (a, b) => a + b

describe('Basic test to check testing suite is working', () => {
    it('performs a simple add test', () => {
        expect(add(1,2)).toBe(3)
    })
})
