import React from "react";
import App from "./App";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	component: App,
	title: "App",
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});

export const Sweden = Template.bind({});
Sweden.args = {
	language: "se",
};

export const Germany = Template.bind({});
Germany.args = {
	language: "de",
};

export const Japan = Template.bind({});
Japan.args = {
	language: "jp",
};
