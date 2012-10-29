class WelcomeController < ApplicationController
  def signin
    @url_info = UrlInfo.find(:all)
  end

  def load_url
    url_info = params[:info]
    url_info.split("<br/>").each do |url|
      UrlInfo.create(:url=>url) if UrlInfo.find_by_url(url) == nil
    end
    render :json=>nil
  end

end
