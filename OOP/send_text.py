from twilio import rest

# Your Account SID from twilio.com/console
account_sid = "-----secret----------"
# Your Auth Token from twilio.com/console
auth_token  = "-----secret----------"

client = rest.Client(account_sid, auth_token)

message = client.messages.create(
    to="+5583987868786", 
    from_="+16467621239",
    body="Hello from Python! (by twilio)")

print(message.sid)
