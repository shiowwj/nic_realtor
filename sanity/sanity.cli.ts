import { defineCliConfig } from 'sanity/cli'
import { dataset, projectId } from './src/env'

export default defineCliConfig({
	api: {
		projectId,
		dataset: dataset,
	},
})
