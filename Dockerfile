FROM fusuf/whatsasena:latest

RUN git clone https://github.com/masterirc/sky7bot /root/sky7bot
WORKDIR /root/sky7bot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
