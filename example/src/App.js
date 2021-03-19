import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { Icon, IconButton } from '@material-ui/core';
import isoCountryFlags from 'iso-country-flags';

const breakpoints = {
	mobile: window.screen.availWidth < 420,
};

const buttonImgDimensions = {
	height: !breakpoints.mobile ? '2.5vh' : 52.2,
	width: !breakpoints.mobile ? '3.33vw' : 69.6,
};

const iconDimensions = {
	height: !breakpoints.mobile ? 18 : 52.2,
	width: !breakpoints.mobile ? 24 : 69.6,
	mobile: breakpoints.mobile,
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
	borderRadius: 16,
}));

const FlagIcon = styled(Icon)(({ margin, dimensions }) => ({
	position: 'relative',
	marginRight: margin,
	height: dimensions.height,
	width: dimensions.width,
	display: 'flex',
}));

const FlagImg = styled('img')(({ dimensions }) => ({
	height: dimensions.height,
	width: dimensions.width,
}));

const getSelectedCountryIso2Code = (l) => {
	switch (l) {
		case 'en':
			return 'gb';
		case 'ja':
			return 'jp';
		case 'sv':
			return 'se';
		default:
			return l;
	}
};

const getFlagIso2Code = (index) => {
	switch (index) {
		case 0:
			return 'gb';
		case 1:
			return 'fi';
		case 2:
			return 'de';
		case 3:
			return 'es';
		case 4:
			return 'jp';
		case 5:
			return 'lv';
		case 6:
			return 'pt';
		case 7:
			return 'se';
		default:
			return '';
	}
};

const getLanguageIcon = (index) => (
	<FlagIcon margin='0.5em' dimensions={iconDimensions}>
		<FlagImg src={isoCountryFlags.findFlagByIso2Code(getFlagIso2Code(index)).default} dimensions={iconDimensions} />
	</FlagIcon>
);

const renderLanguage = (l, index) => (
	<MenuItem key={index} onClick={() => {}}>
		{getLanguageIcon(index)}
		{!breakpoints.mobile && <p>{l}</p>}
	</MenuItem>
);

const App = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	// console.log(isoCountryFlags.findFlagByIso2Code(props.language));

	return (
		<div>
			<StyledIconButton aria-controls='language-menu' aria-haspopup='true' onClick={handleClick}>
				<FlagImg
					src={isoCountryFlags.findFlagByIso2Code(getSelectedCountryIso2Code(props.language)).default}
					dimensions={buttonImgDimensions}
				/>
			</StyledIconButton>
			<Menu id='language-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} keepMounted onClose={handleClose}>
				{props.languages.map((l, index) => renderLanguage(l, index))}
			</Menu>
		</div>
	);
};

App.propTypes = {
	language: PropTypes.string.isRequired,
	languages: PropTypes.array.isRequired,
};

App.defaultProps = {
	language: 'fi',
	languages: ['en', 'fi', 'de', 'es', 'ja', 'lv', 'pt', 'sv'],
};

export default App;
