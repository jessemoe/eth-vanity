package handler

import (
	"crypto/ecdsa"
	"fmt"
	"log"
	"strings"
	"sync"

	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/gin-gonic/gin"
)

var (
	mutex sync.Mutex
	wg    sync.WaitGroup
)

func Generate(c *gin.Context) {
	value := c.Query("value")
	createWallet(len(value), []string{value})
}

func createWallet(strLen int, strSubstr []string) {
	str_length := strLen
	for {
		privateKey, err := crypto.GenerateKey()
		if err != nil {
			log.Fatal(err)
		}

		publicKey := privateKey.Public()
		publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
		if !ok {
			log.Fatal("cannot assert type: publicKey is not of type *ecdsa.PublicKey")
		}

		address := crypto.PubkeyToAddress(*publicKeyECDSA).Hex()
		isGood := false
		endstr := address[42-str_length : 42]
		if strings.Count(endstr, string(endstr[0])) >= str_length {
			isGood = true
		}
		for _, valueStr := range strSubstr {
			if strings.Contains(address, valueStr) {
				isGood = true
				break
			}
		}
		if isGood {
			mutex.Lock()
			fmt.Println(address)
			privateKeyBytes := crypto.FromECDSA(privateKey)
			fmt.Println(hexutil.Encode(privateKeyBytes)[2:])
			mutex.Unlock()
		}

	}
}
