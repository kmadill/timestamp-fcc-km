# Timestamp Microservice

This simple API was created as part of Free Code Camp's curriculum.

## Getting Started

Give it a try [here](https://timestamp-fcc-km.herokuapp.com).

### User Stories

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage
```
https://timestamp-fcc-km.herokuapp.com/December%2015,%202015
https://timestamp-fcc-km.herokuapp.com/1450137600
```

### Example Output
```
{ "unix": 1450137600, "natural": "December 15, 2015" }
```
