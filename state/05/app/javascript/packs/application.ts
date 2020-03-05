import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"
import * as Channels from "@rails/actioncable"
import Turbolinks from "turbolinks"
import "styles/styles"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const images = require.context("../images", true)
// @ts-ignore
const imagePath = name => images(name, true)

import "controllers"
