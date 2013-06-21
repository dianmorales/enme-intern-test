#!/bin/bash
java -jar selenium-server-standalone-2.33.0.jar -role hub &
java -jar selenium-server-standalone-2.33.0.jar -role node  -hub http://localhost:4444/grid/register &