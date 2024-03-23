# FROM pm2:latest
# COPY build /srv
# COPY ecosystem.config.js /srv
# COPY start.sh /srv
# WORKDIR /srv
# RUN chmod +x start.sh
# ENTRYPOINT ["./start.sh"]
# CMD ["pm2-runtime", "start", "ecosystem.config.js"]
# EXPOSE 80
