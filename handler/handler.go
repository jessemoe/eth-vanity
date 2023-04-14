package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Ping(c *gin.Context) {
	c.String(http.StatusOK, "pong")
}

func ErrRouter(c *gin.Context) {
	c.String(http.StatusBadRequest, "url err")
}

func Cors(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
	c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type")
	c.Header("Access-Control-Allow-Credentials", "true")
	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(204)
		return
	}
	c.Next()
}
