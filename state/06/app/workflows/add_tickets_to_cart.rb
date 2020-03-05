#---
# Excerpted from "Modern Front-End Development for Rails",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
#---
class AddTicketsToCart

  attr_reader :concert_id, :row, :seat_number, :tickets_to_buy, :status

  def initialize(concert_id:, row:, seat_number:, tickets_to_buy:, status:)
    @concert_id = concert_id
    @row = row
    @seat_number = seat_number
    @tickets_to_buy = tickets_to_buy
    @status = status
  end

  def seat_range
    seat_number ... seat_number + tickets_to_buy
  end

  def tickets
    @tickets ||= Ticket.where(
        concert_id: concert_id, row: row, number: seat_range).all
  end

  def run
    tickets.update(status: status)
  end

end
