# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_signin_app_session',
  :secret      => 'aefcfb2376e29a22e01cb7d0c83d04da58c10702c91fafa00a20e3607689d264e999dbd03ce44bd72dc68c2801649e2f175a1f67cd4b0b63f22c6bbda8828813'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
