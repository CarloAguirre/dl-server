export const request = {
    payload: {
      "type": "object",
      "properties": {
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      },
      "required": [
        "email",
        "password"
      ]
    }
  }
  
export const response = {
  "type": "object",
  "properties": {
    "user": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      },
      "required": [
        "email",
        "password"
      ]
    }
  },
  "required": [
    "user",
  ]
}
 