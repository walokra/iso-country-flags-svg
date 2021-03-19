const countries = require('./countries');
const { findFlagByCountryName, findFlagByNationality, findFlagByIso2Code, findFlagByIso3Code } = require('./index');

describe('countryFlagsSvg', () => {
	it('all countries must contain required properties', () => {
		const requiredProperties = ['name', 'demonym', 'flag', 'iso2', 'iso3'];

		expect(
			countries.every((country) =>
				requiredProperties.every((requiredProperty) =>
					// eslint-disable-next-line no-prototype-builtins
					country.hasOwnProperty(requiredProperty),
				),
			),
		).toBe(true);
	});
});

describe('api', () => {
	describe('findFlagByCountryName', () => {
		describe('should return correct flag url for Finland', () => {
			it('when argument in capital case', () => {
				const countryInfo = findFlagByCountryName('Finland');

				expect(countryInfo).toBe('test-file-stub');
			});

			it('when argument in uppercase', () => {
				const countryInfo = findFlagByCountryName('FINLAND');

				expect(countryInfo).toBe('test-file-stub');
			});

			it('when argument in lowercase', () => {
				const countryInfo = findFlagByCountryName('finland');

				expect(countryInfo).toBe('test-file-stub');
			});
		});

		// it('should correctly find flag by alt spelling', () => {
		//   const countryInfo = findFlagByCountryName('Republik Singapura');

		//   expect(countryInfo).toBe(path + 'sg.svg');
		// });

		// it('should return empty string for incorrect arg', () => {
		//   expect(findFlagByCountryName('111')).toBe('');
		//   expect(findFlagByCountryName('')).toBe('');
		//   expect(findFlagByCountryName('aassdd')).toBe('');
		// });
	});

	describe('findFlagByNationality', () => {
		describe('should return correct flag url for Finnish', () => {
			it('when argument in capital case', () => {
				const countryInfo = findFlagByNationality('Finnish');

				expect(countryInfo).toBe('test-file-stub');
			});

			it('when argument in uppercase', () => {
				const countryInfo = findFlagByNationality('FINNISH');

				expect(countryInfo).toBe('test-file-stub');
			});

			it('when argument in lowercase', () => {
				const countryInfo = findFlagByNationality('finnish');

				expect(countryInfo).toBe('test-file-stub');
			});
		});

		it('should return empty string for incorrect arg', () => {
			expect(findFlagByNationality('111')).toBe('');
			expect(findFlagByNationality('')).toBe('');
			expect(findFlagByNationality('aassdd')).toBe('');
		});
	});

	describe('findFlagByIso2Code', () => {
		describe('should return correct flag url for Finland', () => {
			it('when argument in uppercase', () => {
				const countryInfo = findFlagByIso2Code('FI');

				expect(countryInfo).toBe('test-file-stub');
			});

			it('when argument in lowercase', () => {
				const countryInfo = findFlagByIso2Code('fi');

				expect(countryInfo).toBe('test-file-stub');
			});
		});

		it('should return empty string for incorrect arg', () => {
			expect(findFlagByIso2Code('111')).toBe('');
			expect(findFlagByIso2Code('')).toBe('');
			expect(findFlagByIso2Code('aassdd')).toBe('');
		});
	});

	describe('findFlagByIso3Code', () => {
		describe('should return correct flag url for Finland', () => {
			it('when argument in uppercase', () => {
				const countryInfo = findFlagByIso3Code('FIN');

				expect(countryInfo).toBe('test-file-stub');
			});

			it('when argument in lowercase', () => {
				const countryInfo = findFlagByIso3Code('fin');

				expect(countryInfo).toBe('test-file-stub');
			});
		});

		it('should return empty string for incorrect arg', () => {
			expect(findFlagByIso3Code('111')).toBe('');
			expect(findFlagByIso3Code('')).toBe('');
			expect(findFlagByIso3Code('aassdd')).toBe('');
		});
	});
});
