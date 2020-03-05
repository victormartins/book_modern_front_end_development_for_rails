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
# Table name: tickets
#
#  id               :bigint(8)        not null, primary key
#  gig_id           :bigint(8)
#  row              :integer
#  number           :integer
#  user_id          :bigint(8)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  ticket_orders_id :bigint(8)
#

class Ticket < ApplicationRecord
  belongs_to :gig
  belongs_to :user
end
