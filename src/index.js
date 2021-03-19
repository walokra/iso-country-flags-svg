const countries = require('./countries');

const isEqual = (str1, str2) => {
	if (!str1) return false;
	if (!str2) return false;
	return str1.toUpperCase() === str2.toUpperCase();
};

const findFlagByPredicate = (predicate) => {
	const country = countries.find(predicate);

	return country ? country.flag : '';
};

const findFlagByCountryName = (countryName) => {
	return findFlagByPredicate(
		({ name, altSpellings }) =>
			isEqual(name, countryName) || altSpellings.some((altSpelling) => isEqual(altSpelling, countryName)),
	);
};

const findFlagByNationality = (nationality) => {
	return findFlagByPredicate(({ demonym }) => isEqual(demonym, nationality));
};

const findFlagByIso2Code = (iso2Code) => {
	return findFlagByPredicate(({ iso2 }) => isEqual(iso2, iso2Code));
};

const findFlagByIso3Code = (iso3Code) => {
	return findFlagByPredicate(({ iso3 }) => isEqual(iso3, iso3Code));
};

module.exports = {
	countries,
	findFlagByCountryName,
	findFlagByNationality,
	findFlagByIso2Code,
	findFlagByIso3Code,
};
