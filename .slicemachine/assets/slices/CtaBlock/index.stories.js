import MyComponent from '../../../../slices/CtaBlock';

export default {
  title: 'slices/CtaBlock'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":"cover","description":"pony"},"slice_type":"cta_block","id":"_Default"}} />
_Default.storyName = ''

export const _WithCtaButton = () => <MyComponent slice={{"variation":"withCtaButton","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":"Need a Properlee?","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","cta_button_text":"Learn More"},"slice_type":"cta_block","id":"_WithCtaButton"}} />
_WithCtaButton.storyName = ''
