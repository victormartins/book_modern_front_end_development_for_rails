#---
# Excerpted from "Modern Front-End Development for Rails",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
#---
class ClearCart
  attr_accessor :concert_id, :tickets

  def initialize(concert_id:, tickets:)
    @concert_id = concert_id
    @tickets = tickets
  end

  def run
    tickets.each do |ticket|
      db_ticket = Ticket.find_by(
        row: ticket["row"], number: ticket["number"], concert_id: concert_id)
      db_ticket&.update(status: :unsold)
    end
  end
end