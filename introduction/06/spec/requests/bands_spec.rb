#---
# Excerpted from "Modern Front-End Development for Rails",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
#---
require "rails_helper"

RSpec.describe "Bands", type: :request do
  describe "GET /bands" do
    it "works! (now write some real specs)" do
      get bands_path
      expect(response).to have_http_status(200)
    end
  end
end
