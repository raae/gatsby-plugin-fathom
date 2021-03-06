exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    site: Joi.string().required().description(`The Fathom site id`),
    honorDnt: Joi.boolean().default(false).description(`Honor Do Not Track?`),
    auto: Joi.boolean()
      .default(true)
      .description(`Automatically track page views?`),
    canonical: Joi.boolean()
      .default(true)
      .description(`Use the canonical URL, instead of the current URL?`),
    excludedDomains: Joi.string().description(
      `Exclude tracking for these domains`
    ),
    includedDomains: Joi.string().description(
      `Include tracking for these domains`
    ),
    spa: Joi.string()
      .valid("auto", "history", "hash")
      .default("auto")
      .description(`Tracking mode`),
    loadType: Joi.string()
      .valid("defer", "async")
      .default("defer")
      .description(`How to load script`),
  });
};
