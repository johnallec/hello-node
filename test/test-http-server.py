import requests

try:
    res = requests.get('http://localhost:8180/')
    print(str(res.status_code) + " -> " + res.text)
    res = requests.put('http://localhost:8180/')
    print(str(res.status_code) + " -> " + res.text)
    res = requests.delete('http://localhost:8180/')
    print(str(res.status_code) + " -> " + res.text)
    res = requests.post('http://localhost:8180/')
    print(str(res.status_code) + " -> " + res.text)
    res = requests.patch('http://localhost:8180/')
    print(str(res.status_code) + " -> " + res.text)
except:
    print('0PS')