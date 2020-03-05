#---
# Excerpted from "Modern Front-End Development for Rails",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
#---
# == Schema Information
#
# Table name: concerts
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  description :text
#  start_time  :datetime
#  venue_id    :bigint(8)
#  genre_tags  :text
#  ilk         :integer
#  access      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Concert < ApplicationRecord
  belongs_to :venue
  has_many :gigs, -> { order(order: :asc) }, dependent: :destroy
  has_many :bands, through: :gigs

  enum ilk: %i[concert meet-n-greet battle]
  enum access: %i[general members vips]

  def start_day
    start_time.to_date
  end

  def duration_minutes
    gigs.map(&:duration_minutes).sum
  end

  def genre_parameters
    genre_tags.split(",").map(&:parameterize).join(",")
  end
end
