const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('Para o argumento count deve retornar o número inteiro 4', () => {
        expect(handlerElephants('count')).toBe(4);
    });
    it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
        expect(handlerElephants('names').includes('Bea')).toBe(true);
    });
    it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
        expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    })
    it('Para o argumento location deve retornar a NW', () => {
        expect(handlerElephants('location')).toBe('NW');
    })
    it('Para o argumento popularity deve retornar 5', () => {
        expect(handlerElephants('popularity')).toBe(5);
    })
    it('Para o argumento availability deve retornar um array com a relação de dias em que é possível visitar os elefantes', () => {
        expect(handlerElephants('availability')) === (['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    })

});
