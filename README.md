# Hello world javascript action

This action prints "Hello, " + the full name of a person + "!" to greet to the log.

## Inputs

### `first-name`

**Required** The first name of the person to greet.

### `last-name`

**Required** The last name of the person to greet.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/github-fullname-action@v1
with:
first-name: 'Janitha'
last-name: 'Ranawansa'
